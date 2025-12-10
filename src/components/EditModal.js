import React, { useState, useEffect } from "react";
import { Modal, View, TextInput, Button, StyleSheet } from "react-native";

const EditModal = ({ editTask, setEditTask, updateTask, darkMode }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    if (editTask) setText(editTask.text);
  }, [editTask]);

  const save = () => {
    if (!text) return;
    updateTask(editTask.id, text);
    setEditTask(null);
  };

  return (
    <Modal
      visible={!!editTask}
      transparent
      animationType="slide"
      onRequestClose={() => setEditTask(null)}
    >
      <View style={styles.overlay}>
        <View style={[styles.modal, { backgroundColor: darkMode ? "#374151" : "#fff" }]}>
          <TextInput
            style={[styles.input, { color: darkMode ? "#fff" : "#000" }]}
            value={text}
            onChangeText={setText}
            autoFocus
          />
          <View style={styles.buttons}>
            <Button title="Cancel" onPress={() => setEditTask(null)} color="#EF4444" />
            <Button title="Save" onPress={save} color="#10B981" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" },
  modal: { width: "90%", padding: 20, borderRadius: 12 },
  input: { borderWidth: 1, borderColor: "#ddd", padding: 10, borderRadius: 8, marginBottom: 20, backgroundColor: "#fff" },
  buttons: { flexDirection: "row", justifyContent: "space-between" },
});

export default EditModal;
